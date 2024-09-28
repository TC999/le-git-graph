async function changeAuthorizationStatus(status) {
    var authorizationTItle = document.getElementById("authorizationTitle");
    var authorizationDescription = document.getElementById("authorizationDescription");
    var authorizationButton = document.getElementById("authorizationStatusButton");
    var authorizationDropdownButton = document.getElementById('authorizationButton');
    if (status == "WAITING") {
        authorizationDropdownButton.style.display = 'none';
        authorizationButton.style.display = 'inline-block';
        authorizationTItle.innerHTML = "等待授权";
        authorizationDescription.innerHTML = "请在弹出窗口中完成授权。";
        authorizationButton.innerHTML = '等待中...';
        authorizationButton.classList.remove('btn-primary');
        authorizationButton.removeEventListener("click", openAuthorization);
    }
    if (status == "SUCCESS") {
        authorizationTItle.innerHTML = "授权成功";
        authorizationDescription.innerHTML = "重载查看提交。";
        authorizationButton.innerHTML = '立即重载';
        authorizationButton.classList.add('btn-primary');
        authorizationButton.addEventListener("click", reloadThisPage);
    }
    if (status == "FAIL") {
        authorizationButton.style.display = 'none';
        authorizationDropdownButton.style.display = 'inline-block';
        authorizationTItle.innerHTML = "授权失败";
        authorizationDescription.innerHTML = "请重试。";
        authorizationButton.innerHTML = '重试';
        authorizationButton.classList.add('btn-primary');
        authorizationButton.addEventListener("click", openAuthorization);
    }
}

function reloadThisPage() {
    window.location.reload();
}

function openAuthorization() {
    var authorizationButton = document.getElementById("authorizationType");
    var authorization_url = "https://github.com/login/oauth/authorize";
    var client_id = "91ddd618eba025e4104e";
    var redirect_url = "https://scaria.dev/github-tree-graph/authorize?version=2";
    var scope = "public_repo";
    if (authorizationButton.value == "privateAndPublic") {
        scope = "repo"
    }
    var url = authorization_url + "?client_id=" + client_id + "&redirect_uri=" + redirect_url + "&scope=" + scope;
    changeAuthorizationStatus("WAITING");
    chrome.runtime.sendMessage({ action: "startListening" });
    chrome.runtime.onMessage.addListener(
        function (request, sender, sendResponse) {
            if (request.status == "SUCCESS" || request.status == "FAIL") {
                if (request.status == "SUCCESS") {
                    var githubToken = request.value.token;
                    var userName = request.value.userName;
                    storeLocalToken(githubToken);
                    storeLocalUserName(userName);
                    var url = window.location.href;
                    var paramsObj = {};
                    if (url.indexOf("?") > -1) {
                        var params = url.split("?")[1].split("&");
                        for (var i = 0; i < params.length; i++) {
                            var param = params[i].split("=");
                            paramsObj[param[0]] = param[1];
                        }
                    }
                    if (paramsObj['fre'] == "true") {
                        window.location.href = url + "&resume=true";
                    }
                    else {
                        changeAuthorizationStatus("SUCCESS");
                    }
                }
                else {
                    changeAuthorizationStatus("FAIL");
                }
            }
        }
    );
    window.open(url, "oauth2_popup", "width=800,height=600");
}

async function addAuthorizationPrompt(reason) {
    var contentView = document.getElementsByClassName("clearfix")[0];
    var branchSelectionHtml = chrome.runtime.getURL('html/authorizationPrompt.html');
    await fetch(branchSelectionHtml).then(response => response.text()).then(branchSelectionHtmlText => {
        var tempDiv = document.createElement('div');
        tempDiv.innerHTML = branchSelectionHtmlText;
        var newContent = tempDiv.firstChild;
        contentView.innerHTML = "";
        var authorizationButton = newContent.getElementsByClassName("authorizeButton")[0];
        var authorizationReason = newContent.getElementsByClassName("authorizationReason")[0];
        var authorizationTypeButton = newContent.getElementsByClassName("authorizationType")[0];
        authorizationButton.addEventListener("click", proceedForAuthorization);
        var privateAndPublicButton = newContent.getElementsByClassName("private-and-public-button")[0];
        var customPATButton = newContent.getElementsByClassName("custom-pat-button")[0];
        var publicOnlyButton = newContent.getElementsByClassName("public-only-button")[0];
        var customPATInput = document.getElementsByClassName("custom-pat-input")[0];
        privateAndPublicButton.addEventListener("click", function (e) {
            authorizationTypeButton.value = "privateAndPublic";
            authorizationButton.disabled = false;
            authorizationButton.style.cursor = "pointer";
            authorizationButton.value = "通过 Le Git Graph 授权";
            authorizationButton.innerHTML = "通过 Le Git Graph 授权";
            customPATInput.style.display = "none";
        });
        publicOnlyButton.addEventListener("click", function (e) {
            authorizationTypeButton.value = "publicOnly";
            authorizationButton.disabled = false;
            authorizationButton.style.cursor = "pointer";
            authorizationButton.value = "通过 Le Git Graph 授权";
            authorizationButton.innerHTML = "通过 Le Git Graph 授权";
            customPATInput.style.display = "none";
        });
        customPATButton.addEventListener("click", function (e) {
            authorizationTypeButton.value = "customPAT";
            customPATInput.style.display = "block";
            authorizationButton.value = "设置 PAT";
            authorizationButton.innerHTML = "设置 PAT";
            if (customPATInput.value.length > 0) {
                authorizationButton.disabled = false;
                authorizationButton.style.cursor = "pointer";
            }
            else {
                authorizationButton.disabled = true;
                authorizationButton.style.cursor = "not-allowed";
            }
        });
        authorizationReason.innerHTML = reason;
        contentView.appendChild(newContent);
        var customPATInput = document.getElementsByClassName("custom-pat-input")[0];
        customPATInput.addEventListener("input", function (e) {
            if (customPATInput.value.length > 0) {
                authorizationButton.disabled = false;
                authorizationButton.style.cursor = "pointer";
            }
        });
    });
    return;
}
function proceedForAuthorization() {
    var authorizationTypeButton = document.getElementsByClassName("authorizationType")[0];
    var authorizationType = authorizationTypeButton.value;
    if (authorizationType == "customPAT") {
        var customPATInput = document.getElementsByClassName("custom-pat-input")[0];
        var customPAT = customPATInput.value;
        storeLocalToken(customPAT);
        var presentUrl = window.location.href;
        if (presentUrl.indexOf("?") < 0) {
            window.location.href = presentUrl + "/?page=commits";
        }
        else {
            window.location.reload();
        }
    }
    else {
        openAuthorization();
    }
}

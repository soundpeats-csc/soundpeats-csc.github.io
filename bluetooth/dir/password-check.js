const correctPasswordHash = '75d0e3b4a0ee6a75a8e7fad1b2014a78364d51ea6dcffbebc28f8822ba48ba81';

function checkPassword() {
    const passwordInput = document.getElementById('passwordInput');
    const passwordPrompt = document.getElementById('passwordPrompt');

    const inputPasswordHash = new TextEncoder().encode(passwordInput.value);
    crypto.subtle.digest('SHA-256', inputPasswordHash).then((hashBuffer) => {
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

        if (hashHex === correctPasswordHash) {
            passwordPrompt.classList.add('hidden');
            window.location.href = "./dir/soundpeats-protocol-v1.1.0.html"; // 将此处替换为您希望跳转到的受保护页面的文件名或URL
        } else {
            alert('密码错误，请重新输入。');
            passwordInput.value = '';
        }
    });
}

document.getElementById('submitButton').addEventListener('click', function() {
    // ユーザーの入力を取得
    const userInput = document.getElementById('userInput').value;

    // 入力が空でないか確認
    if (userInput.trim() !== '') {
        // 出力エリアにユーザーの入力を表示
        document.getElementById('output').innerText = `あなたが入力したテキスト: ${userInput}`;
    } else {
        // 入力が空の場合のエラーメッセージ
        document.getElementById('output').innerText = 'テキストを入力してください。';
    }

    // 入力フィールドをクリア
    document.getElementById('userInput').value = '';
});

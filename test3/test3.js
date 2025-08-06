document.getElementById("submitButton").addEventListener("click", function() {
    // ユーザーの入力を取得
    const userInput = document.getElementById("userInput").value;

    // 入力が空でないか確認
    if (userInput.trim() !== "") {
        // 確認ポップアップを表示
        const confirmSave = confirm(`以下の内容を保存しますか？\n\n${userInput}`);
        
        if (confirmSave) {
            // ユーザーが「OK」を選択した場合
            document.getElementById("output").innerText = `あなたが入力したテキスト: ${userInput}`;
            // 入力フィールドをクリア
            document.getElementById("userInput").value = "";
        } else {
            // ユーザーが「キャンセル」を選択した場合
            document.getElementById("output").innerText = "保存がキャンセルされました。";
        }
    } else {
        // 入力が空の場合のエラーメッセージ
        document.getElementById("output").innerText = "テキストを入力してください。";
    }
});

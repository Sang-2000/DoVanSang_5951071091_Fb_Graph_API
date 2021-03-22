axios.get('https://graph.facebook.com/utc2hcmc/posts?access_token=EAAAAZAw4FxQIBAJYJjV2eKVzYZBl2wNnlJ27ww0Kh2dNr1zgw51UnG53YRRO5b6ZAsmloR1PpaXNCIMIRiD0JZA67IUmdZCChYdncF8qppEEKtu8TVPG83GBvz175bTsqadRFbAkzTU1phiZCQjelpfFZBB4B0fijTx3YfhyttWIwZDZD')
    .then(response => {

        var name = "<span class='highlight'> Fanpage Facebook: Trường Đại học Giao thông Vận tải - Phân hiệu tại TP.HCM - UTC2 </span> <br> Thông tin của những bài viết gần nhất <br> <hr>";

        var infoPosts = "";

        for (var i = 1; i <= 3; i++) {
            infoPosts +=
                " <span class='highlight'>Bài viết " + i + " </span> " +
                "</br> Nội dung: <br>" +
                "<span class= 'content'>" + response.data.data[i - 1].message + "</span> <hr>"
        }

        var result = name + infoPosts;

        document.getElementById('infoPosts').innerHTML = result;
    })
    .catch(error => console.error(error));
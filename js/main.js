function header(rootDir){
    $.ajax({
        url: rootDir + "include/header.html", // 読み込むHTMLファイル
        cache: false,
        async: false,
        dataType: 'html',
        success: function(html){
            html = html.replace(/\{\$root\}/g, rootDir); //header.htmlの{$root}を置換
            document.write(html);
        }
    });
}

function sidebar(rootDir){
    $.ajax({
        url: rootDir + "include/sidebar.html", // 読み込むHTMLファイル
        cache: false,
        async: false,
        dataType: 'html',
        success: function(html){
            html = html.replace(/\{\$root\}/g, rootDir); //header.htmlの{$root}を置換
            document.write(html);
        }
    });
}

function right_side(rootDir){
    $.ajax({
        url: rootDir + "include/right_side.html", // 読み込むHTMLファイル
        cache: false,
        async: false,
        dataType: 'html',
        success: function(html){
            html = html.replace(/\{\$root\}/g, rootDir); //header.htmlの{$root}を置換
            document.write(html);
        }
    });
}
if (process.env.NODE_ENV !== 'production') {
    require('file-loader!../index.html');
    require( "./style.css");
}

console.log(1111);
// export const viteNodeApp = app;
// import http from 'http';
// const server = http.createServer((req, res) => {
//     // console.log('Okkk');
//     // console.log(req);
//     if (req.url === '/') {
//         res.end('Home Page');

//     }else if(req.url==='/api/products'){
//         const data = [
//             { id: 1, name: 'Product 1' },
//             { id: 2, name: 'Product 2' },
//             { id: 3, name: 'Product 3' },
//         ]
//         res.end(JSON.stringify(data));
//     }

// });



import express from 'express';
const app = express();


app.use(express.json());


app.get('/api/products', (req, res) => {
    const data = [
        { id: 1, name: 'Product 1' },
        { id: 2, name: 'Product 2' },
        { id: 3, name: 'Product 3' },
    ];
    res.json(data);
});
app.get('/api/users', (req, res) => {
    res.json([{ id: 1, name: "User A" }])
})
app.get('/api/products/:id', (req, res) => {
    console.log(req.params);
})
app.post('/api/products', (req, res) => {
    console.log(req.body)
})
app.delete(`/api/products/:id`, (req, res) => {
    console.log(req.body);
})
app.put(`api/products/:id`, (req, res) => {
    console.log(req.body);
})

//restFull api
app.listen(8080, () => {
    console.log('Started');
})

export const viteNodeApp = app;
// B1: npm i vite vite-plugin-node -D
// B2: tạo file vite.config.js ở root -> copy code của thầy
// B3: chỉnh sửa file package.json -> copy code của thầy
// B4: chỉnh sửa file app.js -> export const viteNodeApp = app; ở cuối file
// B5: npm run dev

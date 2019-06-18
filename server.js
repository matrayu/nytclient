const app = require('./nytServer/app');

app.listen(8000, () => {
    console.log('Server started on PORT 8000');
});
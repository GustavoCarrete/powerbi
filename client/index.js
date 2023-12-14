
function add_refresh_token() {
    axios.post("http://localhost:3010/add_refresh_token").then((res) => {
        console.log(res);
        window.open([res.data]);
    })
}

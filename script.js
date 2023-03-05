import axios from 'axios';

const authWithGithub = async (e) => {
    const client_id = 'aa9296cd907e16b39311';
    const redirect_url = 'http://localhost:3000';
    const scope = 'repo';
    const url = `https://github.com/login/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_url}&scope=${scope}`;
    
    console.log(url);

    const response = await axios.get(url);
    console.log(response);
}
// document.getElementById("btn").addEventListener("click", authWithGithub);
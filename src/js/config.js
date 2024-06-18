

const MODE="PROD";

const IG_REQUESTS_URLS={
    PROD:"https://b90uc7s5t7.execute-api.us-east-2.amazonaws.com/followers",
    DEV:"http://localhost:3000/followers"
}

const IG_REQUESTS_BASEURL=IG_REQUESTS_URLS[MODE];

export{IG_REQUESTS_BASEURL};
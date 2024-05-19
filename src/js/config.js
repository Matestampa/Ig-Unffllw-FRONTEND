

const MODE="DEV";

const IG_REQUESTS_URLS={
    PROD:"amazon nos se que poronga/followers",
    DEV:"http://localhost:3000/followers"
}

const IG_REQUESTS_BASEURL=IG_REQUESTS_URLS[MODE];

export{IG_REQUESTS_BASEURL};
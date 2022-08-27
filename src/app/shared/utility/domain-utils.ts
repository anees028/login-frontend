export class DomainUtills {
    baseUrl = new BaseUrl();
    GetDomain(): any {
        return this.baseUrl.ApiUrl + "";
    }
};
export class BaseUrl {
    private applicationUrl: string;
    private apiUrl: string;
    constructor() {
        this.applicationUrl = window.location.origin + "/";
        this.apiUrl = this.getApiUrl();
    }
    get ApplicationUrl() {
        return this.applicationUrl;
    }
get ApiUrl() {
        return this.apiUrl;
    }
    getApiUrl() {
        let originalPath = window.location.origin;
        let domain: string = "";// hamarai live ki yah dev ki url
        if (originalPath.includes("localhost")) {
            domain = "http://localhost:3001/";
        }
        return domain;
    }
}
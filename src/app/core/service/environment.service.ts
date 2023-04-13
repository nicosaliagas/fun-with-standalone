import { Injectable } from '@angular/core';

export interface IConfigEnvironment {
    production: boolean;
    APP_DEPLOY_DATE: string;
    APP_COMMIT_NUMBER: string;
    BO_SERVER_PATH: string;
    APP_SERVER_PATH: string;
    CHAT_SERVER_PATH: string;
    ID_GTAG: string;
}

@Injectable({
    providedIn: 'root',
})
export class EnvironmentService {
    appServerPath: string;
    boServerPath: string;
    appCommitNumber: string;
    appDeployDate: string;
    chatServerPath: string;
    idGtag: string;

    constructor() {
        this.boServerPath = ''
        this.appServerPath = ''
        this.appCommitNumber = ''
        this.chatServerPath = ''
        this.appDeployDate = ''
        this.idGtag = ''
    }

    set conf(data: IConfigEnvironment) {
        this.appServerPath = data.APP_SERVER_PATH
        this.boServerPath = data.BO_SERVER_PATH
        this.chatServerPath = data.CHAT_SERVER_PATH
        this.appCommitNumber = data.APP_COMMIT_NUMBER
        this.appDeployDate = data.APP_DEPLOY_DATE
        this.idGtag = data.ID_GTAG
    }
}

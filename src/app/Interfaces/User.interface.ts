export interface User {
    id: number | string,
    name: string,
    company: string,
    function: string,
    contractType: string,
    auditUserCreate: string,
    auditNotDeleted: boolean;
    auditCreateDate: Date | string;
    auditLastUpdateDate: Date | string;
    auditUserLastUpdate: string;
    stateName: string
    hexCode: string
}

export class Query {
    constructor(
        filter: any,
        skip: Number,
        limit: Number,
        sort: any
    ) {
        this.abled = true;
        this.filter = filter;
        this.skip = skip;
        this.limit = limit;
        this.sort = sort;
    }
    public abled: boolean = false;

    public filter: any;

    public skip: Number;

    public limit: Number;

    public sort: any;
}

export class Result<T>{
    constructor(results: Array<T>, total: Number) {
        this.results = results;
        this.total = total;
    }

    public results: Array<T>;

    public total: Number;
}
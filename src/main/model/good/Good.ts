export class Create {
    constructor(
        name: String,
        channel: String,
        price: Number,
        priceUnit: String,
        count: Number,
        countUnit: String,
        remork: String
    ) {
        this.name = name;
        this.channel = channel;
        this.price = price;
        this.priceUnit = priceUnit;
        this.count = count;
        this.countUnit = countUnit;
        this.remork = remork;
    }

    public name: String;

    public channel: String;

    public price: Number;

    public priceUnit: String;

    public count: Number;

    public countUnit: String;

    public remork: String;
}

export class FullTemplate{
    constructor(
        id: Number,
        name: String,
        channel: String,
        price: Number,
        priceUnit: String,
        count: Number,
        countUnit: String,
        remork: String,
        createTime: Number,
        updateTime: Number
    ) {
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.price = price;
        this.priceUnit = priceUnit;
        this.count = count;
        this.countUnit = countUnit;
        this.remork = remork;
        this.createTime = createTime;
        this.updateTime = updateTime;
    }

    public id: Number;

    public name: String;

    public channel: String;

    public price: Number;

    public priceUnit: String;

    public count: Number;

    public countUnit: String;

    public remork: String;

    public createTime: Number;

    public updateTime: Number;
}

export class FullEntity{
    constructor(
        id: Number,
        template: FullTemplate,
        name: String,
        channel: String,
        price: Number,
        priceUnit: String,
        count: Number,
        countUnit: String,
        remork: String,
        createTime: Number,
        updateTime: Number
    ) {
        this.id = id;
        this.template = template;
        this.name = name;
        this.channel = channel;
        this.price = price;
        this.priceUnit = priceUnit;
        this.count = count;
        this.countUnit = countUnit;
        this.remork = remork;
        this.createTime = createTime;
        this.updateTime = updateTime;
    }

    public id: Number;

    public template: FullTemplate;

    public name: String;

    public channel: String;

    public price: Number;

    public priceUnit: String;

    public count: Number;

    public countUnit: String;

    public remork: String;

    public createTime: Number;

    public updateTime: Number;
}
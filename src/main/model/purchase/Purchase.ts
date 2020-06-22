import { FullEntity as FullEntityGood, Create as GoodCreate } from '../good/Good';

export class Full {
    constructor(
        id: Number,
        describe: String,
        remark: String,
        goodList: Array<FullEntityGood>,
        createTime: Number,
        updateTime: Number,
    ) {
        this.id = id;
        this.describe = describe;
        this.remark = remark;
        this.goodList = goodList;
        this.createTime = createTime;
        this.updateTime = updateTime;
    }

    public id: Number;

    public describe: String;

    public remark: String;

    public goodList: Array<FullEntityGood>;

    public createTime: Number;

    public updateTime: Number;
}


export class Create{
    constructor(
        describe: String,
        remark: String,
        goodList: Array<GoodCreate>
    ){
        this.describe = describe;
        this.remark = remark;
        this.goodList = goodList;
    }

    public describe: String;

    public remark: String;

    public goodList: Array<GoodCreate>;
}
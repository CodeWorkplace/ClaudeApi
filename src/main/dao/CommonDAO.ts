import { Query as TableQuery } from '../model/common/Table';
import { getDB } from '../util/mongoConnect';

export class CommonDAO<T> {
    constructor(collectionName: String) {
        this.collectionName = collectionName;
    }
    public collectionName: String;

    public getPage = async (query: TableQuery) => {
        const db: any = await getDB();
        const collection = db.collection(this.collectionName);

        const getResult = () => new Promise((resolve, reject) => {
            collection.find(query.filter).skip(query.skip).limit(query.limit).sort(query.sort).toArray((err: any, docs: any) => {
                if (err) {
                    console.log('[Claude - DAO - Common]', err);
                    reject(err);
                    return;
                }
                console.log('[Claude - DAO - Common]', docs);
                resolve(docs);
            });
        });

        const getCount = ()  => new Promise((resolve, reject) => {
            collection.find(query.filter).count((err: any, result: any) => {
                if (err) {
                    console.log('[Claude - DAO - Common]', err);
                    reject(err);
                    return;
                }
                console.log('[Claude - DAO - Common]', result);
                resolve(result);
            });
        });

        return await Promise.all([getResult, getCount]);
    }

    public getAll = async () => {
        const db: any = await getDB();
        const collection = db.collection(this.collectionName);

        const getResult = () => new Promise((resolve, reject) => {
            collection.toArray((err: any, docs: any) => {
                if (err) {
                    console.log('[Claude - DAO - Common]', err);
                    reject(err);
                    return;
                }
                console.log('[Claude - DAO - Common]', docs);
                resolve(docs);
            });
        });

        return await getResult();
    }
}
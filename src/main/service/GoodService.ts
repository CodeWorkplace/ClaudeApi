import { Full as FullGood } from '../model/good/Good';
import { CommonDAO } from '../dao/CommonDAO';
import { GoodDAO } from '../dao/GoodDAO';

class GoodService{
    private commonDAO: CommonDAO<FullGood>;

    private goodDAO: GoodDAO;
}
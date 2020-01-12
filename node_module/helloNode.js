const candy = {
    status: {
        name:'node',
        conunt:5
    },
    getCandy(){
        this.status.conunt--;
        return this.status.conunt;
    }
}
const {status,name} = candy;


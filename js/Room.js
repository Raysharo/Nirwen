

export default class Room {
    constructor(mur_tab, id_room, Tab_ennemies, Tab_obstacles,clear_state,in_room) {
        this.x_max=mur_tab[0][0];
        this.z_max=mur_tab[2][1];
        this.x_min=mur_tab[1][0];
        this.z_min=mur_tab[3][1];
        this.id_room=id_room;
        this.clear_state=clear_state;
        this.Tab_ennemies =Tab_ennemies;
        this.Tab_obstacles=Tab_obstacles;
        this.in_room=in_room
        this.doors=[]
    }
    
    random_ennemies() {
        const layout = Math.floor(Math.random() * 3 + 1);
        let set=[]
        switch (layout) {
            case 1:
                let x1=this.x_max - 20;
                let z1=this.z_max - 20;
                let x2=this.x_max - 20;
                let z2=this.z_min + 20;
                let x3=this.x_min + 20;
                let z3=this.z_max - 20;
                let x4=this.x_min + 20;
                let z4=this.z_min + 20;
                set.push([x1,z1,true],[x2,z2,true],[x3,z3,true],[x4,z4,true]);
                break;
            case 2:
                let x_1=(this.x_max + this.x_min)/2;
                let z_1=(this.z_max + this.z_min)/2;
                let x_2=(this.x_max + this.x_min)/2;
                let z_2=(this.z_max + this.z_min)/2 + 50;
                let x_3=(this.x_max + this.x_min)/2;
                let z_3=(this.z_max + this.z_min)/2 - 50;
                set.push([x_1,z_1,true],[x_2,z_2,true],[x_3,z_3,true]);
                break;
            
            case 3:
                let x__1=(this.x_max + this.x_min)/2;
                let z__1=(this.z_max + this.z_min)/2;
                let x__2=(this.x_max + this.x_min)/2;
                let z__2=(this.z_max + this.z_min)/2 + 50;
                let x__3=(this.x_max + this.x_min)/2;
                let z__3=(this.z_max + this.z_min)/2 - 50;
                let x__4=(this.x_max + this.x_min)/2 + 50;
                let z__4=(this.z_max + this.z_min)/2;
                let x__5=(this.x_max + this.x_min)/2 - 50;
                let z__5=(this.z_max + this.z_min)/2;
                set.push([x__1,z__1,true],[x__2,z__2,true],[x__3,z__3,true],[x__4,z__4,true],[x__5,z__5,true]);
                break;
        
            default:
                break;
        }
        this.Tab_ennemies=set
    }
}
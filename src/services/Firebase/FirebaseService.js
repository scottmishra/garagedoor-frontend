import { database } from '../../constants'

export default class FirebaseService {
    sendCloseCommand(){
        let update = {
            state: 'closed',
            lastAction: Date()
        };
        database.ref().child('doorStatus').update(update, (error) =>{
            if(error) console.error(error);
        });
    }

    sendOpenCommand(){
        let update = {
            state: 'opened',
            lastAction: Date(),
            lastOpenned: Date()
        };
        database.ref().child('doorStatus').update(update, (error) =>{
            if(error) console.error(error);
        });
    }

    sendSleepTimeUpdate(sleepTime){
        let update = {
            sleepTime: sleepTime
        }
        database.ref().child('doorStatus').update(update, (error) =>{
            if(error) console.error(error);
        });
    }

    sendGarageAccess(access){
        let value = "allowed";
        if(!access){
            value = "disabled";
        }
        let update = {
            access: value
        }
        database.ref().child('doorStatus').update(update,(error) =>{
            if(error) console.error(error);
        });
    }
}
import { API, cond } from 'space-api';

class Service {
    constructor(projectId, spaceAPIURL){
        this.api = new API(projectId, spaceAPIURL);
        this.db = this.api.DB("mysql");
    }

    insertPost(post){
        this.db.insert('post').doc(post).apply().then(res => {
            if (res.status === 200) {
              return console.log(res.status);
            }
          }).catch(ex => {
            console.log(ex)
          });
    }

    getPosts(){
      this.db.get('post').apply().then(res => {
        if (res.status === 200){
          const {data} = res
          return console.log(data.result)
        }
      }).catch(ex => {
        console.log(ex)
      })
    }
}

export default Service;
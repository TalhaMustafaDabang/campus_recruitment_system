
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


import { file } from '../models/file';
// Do not import from 'firebase' as you'd lose the tree shaking benefits
import * as firebase from 'firebase';
import { DbService } from './db.service';
import { element } from '../../../node_modules/protractor';


@Injectable()
export class FileUploadService {
private uploadTask: firebase.storage.UploadTask;
private basePath: string;
downloadUrl:string[]= new Array(3);


    constructor(private dbs: DbService){}

 upload(file:file)
{
    console.log("in file-upload service");
    let storageRef = firebase.storage().ref();
    this.uploadTask=storageRef.child(`${"uploads"+"/"}${firebase.auth().currentUser.uid}`).put(file.file);
    this.uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot)=> {
            //upload is progress
            

            file.progress = (this.uploadTask.snapshot.bytesTransferred / this.uploadTask.snapshot.totalBytes)* 100;
            console.log(file.progress);
        },
        //error observer
        (error) => {
        console.log(error);
        },


        ():any => {
            file.name=file.file.name;
            // this.saveFileData(file);
            firebase.storage().ref().child("uploads"+"/"+firebase.auth().currentUser.uid).getDownloadURL().then(s=>{console.log(s),this.dbs.imageUrlAdder(s)});
       
            
        });

    }
    
}





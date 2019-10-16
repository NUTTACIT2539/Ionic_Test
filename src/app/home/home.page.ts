import { AngularFireDatabase } from '@angular/fire/database';
import { Component, OnInit } from "@angular/core";
import { AlertController } from '@ionic/angular';

// declare var microgear;
 
@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit {
  // public tem: any = "25";
  // public humi: any = "70";
  public sta: any = " false ";
  public timeSt: any = "";
  public setTimeStart2 :any ="00:00";
  // public setDate : any ="";
// any คืออะไรก็ได้ //
  constructor(public fb: AngularFireDatabase,
    public alertController: AlertController) {
  
  }
  // oninit คือ ไม่ว่าจะ ทำงานยังไง ต้อง มาทำ ที่ oninit ก่อน //
 ngOnInit(){
  this.fb
  .object("set/time2/timeStart2")
  .valueChanges()
  .subscribe((value: any) => {
    console.log(value);
    this.setTimeStart2 = value;
  });
 }


  presentAlert() {
    const alert = document.createElement('ion-alert');
  alert.header = 'ตั้งเวลา';
  alert.inputs = [
    {
    
    },
    {
      
      name: 'name2',
      id: 'name2-id',
    
    },
    
  ];
  alert.buttons = [
    {
      text: 'Cancel',
      role: 'cancel',
      cssClass: 'secondary',
      handler: () => {
        console.log('Confirm Cancel')
      }
    }, {
      text: 'Ok',
      handler: () => {
        console.log('Confirm Ok')
      }
    }
  ];

  document.body.appendChild(alert);
  return alert.present();
}





 public getTimeStart2(time:any) {
  let dt = new Date(time);
  // console.log(dt.getHours() + " " + dt.getMinutes());
  console.log(this.setTimeStart2);
  let timeset = `${this.zeroPad(dt.getHours())}:${this.zeroPad(dt.getMinutes())}`;
  this.setTimeStart2 = timeset;
  this.fb
  .object("set/time2/timeStart2")
  .set(this.setTimeStart2)
  .then(() => {
   // microgear.publish("/ionic/sw1", this.Sw_togle + "");
  });
  console.log(this.setTimeStart2);
}


public timeNow() {
  setInterval(() => {
    let time = new Date();
    this.timeSt = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
  }, 1000);
}

private zeroPad(nr, base = 10) {
  var len = (String(base).length - String(nr).length) + 1;
  return len > 0 ? new Array(len).join('0') + nr : nr;
}
// public getDate(date:any){
//   let da = new Date(date);
//   console.log(this.setDate);
//   let dateset = `${this.zeroPad(da.getDay())}:${this.zeroPad(da.getMonth())}:${this.zeroPad(da.getFullYear())}`;
//   this.setDate = dateset;
//   this.fb
//   .object("set/date/Date")
//   .set(this.setDate)
//   .then(() => {

//   });
//   console.log(this.setDate);
// }



  // public swit() {
  //   microgear.publish("/cpe/swit", `${this.sta}`);
  // }

  // public Init() {
  //   microgear.on("message" , (topic , msg) => {
  //     // if (topic == "/nuttacit007/cpe/dht") {
  //     //   this.tem = msg.split(",")[0];
  //     //   this.humi = msg.split(",")[1];
  //     // }
  //     console.log(`${topic} -> ${msg}`);
  //   });
  //   microgear.on("connected", () => {
  //     microgear.subscribe("/cpe/+");
  //     console.log("เชื่อมต่อสำเร็จ");
  //   });

  //   microgear.on("present", (event: any) => {
  //     console.log(event);
  //   });

  //   microgear.on("absent", (event: any) => {
  //     console.log(event);
  //   });
  // }


  // let ประกาศได้ทุกค่า
  // public getTime(time) {
  //   let dt = new Date(time);
  //   //console.log(dt.getHours() , dt.getMinutes());
  //   microgear.publish("/cpe/time", `${dt.getHours()}:${dt.getMinutes()}`);
  // }
  
}
  

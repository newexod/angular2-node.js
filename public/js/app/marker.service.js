// import { Injectable } from '@angular/core';
// import { Http, Headers, Response } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/Rx';
// import { Marker } from "./marker.model";
// @Injectable()
// export class MarkerService {
//     constructor(private http: Http) {}
//     getMarkers(): Observable<any> {
//         return this.http.get('http://localhost:3000/markers')
//             .map( (data: Response) => {
//                 const extracted = data.json();
//                 const markerArray: Marker[] = [];
//                 let marker;
//                 for (let element of extracted.data) {
//                     marker = new Marker(element.content);
//                     markerArray.push(marker);
//                 }
//                 return markerArray;
//             });
//     }
//     saveMarkers(marker: Marker): Observable<any> {
//         const body = JSON.stringify(marker);
//         const headers = new Headers({'Content-Type': 'application/json'});
//         return this.http.post('http://localhost:3000/marker', body, {headers: headers});
//     }
// } 

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcmtlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhDQUE4QztBQUM5QywyREFBMkQ7QUFDM0QsZ0RBQWdEO0FBQ2hELG9CQUFvQjtBQUVwQiwyQ0FBMkM7QUFFM0MsZ0JBQWdCO0FBQ2hCLCtCQUErQjtBQUMvQix5Q0FBeUM7QUFFekMsc0NBQXNDO0FBQ3RDLGdFQUFnRTtBQUNoRSwwQ0FBMEM7QUFDMUMsaURBQWlEO0FBQ2pELG9EQUFvRDtBQUNwRCw4QkFBOEI7QUFDOUIsd0RBQXdEO0FBQ3hELDREQUE0RDtBQUM1RCxnREFBZ0Q7QUFDaEQsb0JBQW9CO0FBQ3BCLHNDQUFzQztBQUN0QyxrQkFBa0I7QUFDbEIsUUFBUTtBQUVSLHFEQUFxRDtBQUNyRCwrQ0FBK0M7QUFDL0MsNkVBQTZFO0FBQzdFLDJGQUEyRjtBQUMzRixRQUFRO0FBQ1IsSUFBSSIsImZpbGUiOiJtYXJrZXIuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuLy8gaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuLy8gaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbi8vIGltcG9ydCAncnhqcy9SeCc7XHJcblxyXG4vLyBpbXBvcnQgeyBNYXJrZXIgfSBmcm9tIFwiLi9tYXJrZXIubW9kZWxcIjtcclxuXHJcbi8vIEBJbmplY3RhYmxlKClcclxuLy8gZXhwb3J0IGNsYXNzIE1hcmtlclNlcnZpY2Uge1xyXG4vLyAgICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7fVxyXG5cclxuLy8gICAgIGdldE1hcmtlcnMoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuLy8gICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL21hcmtlcnMnKVxyXG4vLyAgICAgICAgICAgICAubWFwKCAoZGF0YTogUmVzcG9uc2UpID0+IHtcclxuLy8gICAgICAgICAgICAgICAgIGNvbnN0IGV4dHJhY3RlZCA9IGRhdGEuanNvbigpO1xyXG4vLyAgICAgICAgICAgICAgICAgY29uc3QgbWFya2VyQXJyYXk6IE1hcmtlcltdID0gW107XHJcbi8vICAgICAgICAgICAgICAgICBsZXQgbWFya2VyO1xyXG4vLyAgICAgICAgICAgICAgICAgZm9yIChsZXQgZWxlbWVudCBvZiBleHRyYWN0ZWQuZGF0YSkge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIG1hcmtlciA9IG5ldyBNYXJrZXIoZWxlbWVudC5jb250ZW50KTtcclxuLy8gICAgICAgICAgICAgICAgICAgICBtYXJrZXJBcnJheS5wdXNoKG1hcmtlcik7XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICByZXR1cm4gbWFya2VyQXJyYXk7XHJcbi8vICAgICAgICAgICAgIH0pO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIHNhdmVNYXJrZXJzKG1hcmtlcjogTWFya2VyKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuLy8gICAgICAgICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkobWFya2VyKTtcclxuLy8gICAgICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KTtcclxuLy8gICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9tYXJrZXInLCBib2R5LCB7aGVhZGVyczogaGVhZGVyc30pO1xyXG4vLyAgICAgfVxyXG4vLyB9Il19

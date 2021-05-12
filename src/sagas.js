import {delay} from 'redux-saga/effects';
import {takeEvery, put} from 'redux-saga/effects'

//put - triggers actions (dispatch())
//takeEvery (reassign the task of acton)

function* watchFetchDog(){
    yield takeEvery('FETCHED_DOG',fetchDogAsync)

    //takeEvery('action to watch',which function you want to trigger)
}

function* fetchDogAsync(){
    
    try{
        
        yield put(requestDog) //dispatch an action that makes the loader appear 
    const data = yield call( () => {

         //call one api to get dog's info
         return fetch('https://dog.ceo/api/breeds/image/random')
         .then(res => res.json())
    }
    );
    yield put(requestDogSuccess(data))


}

    catch(error){
        yield put(requestDogError())
    }

}
import React, { useEffect, useState } from "react";
import LayOut from "../../component/layOut";
import Card from "../../component/card";
import { useDispatch, useSelector } from "react-redux";
import {ApiJson} from '../../redux/counter'
import { DetailUser } from "../../component/detailUser/detailUser";

export const DataUser = () => {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.user)
  const [detailUser, setDetailUser] = useState(false)
  useEffect(() => {
    dispatch(ApiJson())
  },[])
  const handleOnClick = () => {
    setDetailUser(true)
  }
  const handleOut = () => {
    setDetailUser(false)
  }
  return(
    <LayOut title="Data User">
      <div className="flex">
        <div className={detailUser ? 'w-1/2 ease-out duration-200 ': 'ease-in duration-200'}>
          <Card data={data.data}  buttonDetail buttonOnclik={handleOnClick}/>
        </div>
        <div className={detailUser ? 'w-1/2 bg-white duration-200 ease-in' : ' ease-out duration-200'}>
          {detailUser ? <DetailUser onClick={handleOut}/> : null}
        </div>
      </div>
    </LayOut>

  )
}
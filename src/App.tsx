import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from './redux/store';
import {getComments} from "./redux/actions/comments";

function App() {
  const dispatch = useDispatch()
  const comments = useSelector((state: RootState) => state.comment.comments )
  console.log(comments)

  useEffect(() => {
    dispatch(getComments({
      page: 1,
      perPage: 10,
      additionalSkip: 0
    }))

  }, [])

  return (<>
  </>);
}

export default App;

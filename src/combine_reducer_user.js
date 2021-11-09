import store from './redux'; //if combine_reducer was index in redux folder

import { changeCount } from './redux/count';
import { addFavoriteThing, removeFavoriteThing } from './redux/favoriteThings';
import {
  setYouTubeTitle,
  incrementViewCount,
  upvoteVideo,
  downvoteVideo,
} from './redux/youTubeVideo';

/**
 * Challenge:
 *
 * 1. Bring in all the action creators we've made so far and dispatch them, just to make sure things are working
 */

store.dispatch(changeCount(42));
store.dispatch(addFavoriteThing('Door bells'));
store.dispatch(addFavoriteThing('Sleigh bells'));
store.dispatch(removeFavoriteThing('door bells'));
store.dispatch(setYouTubeTitle('Learning Redux is Fun!'));
store.dispatch(incrementViewCount());
store.dispatch(upvoteVideo());
store.dispatch(incrementViewCount());
store.dispatch(upvoteVideo());
store.dispatch(incrementViewCount());
store.dispatch(upvoteVideo());
store.dispatch(downvoteVideo());

import Vue from 'vue'

import {
  RECEIVE_USERLIST,
  RECEIVE_SEARCH
} from './mutation-types'

export default {
  [RECEIVE_USERLIST] (state,{list}){
    state.userlist=list;
  },
  [RECEIVE_SEARCH] (state,{list}){
    state.userlist=list;
  }
}

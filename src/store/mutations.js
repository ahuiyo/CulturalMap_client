import Vue from 'vue'

import {
  RECEIVE_USERLIST
} from './mutation-types'

export default {
  [RECEIVE_USERLIST] (state,{list}){
    state.userlist=list;
  }
}

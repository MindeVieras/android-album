
import { footerConstants } from '../_constants';

const initialState = {
  links: {
    goto_user_create: false,
    user_create: false
  }
}

export function footer(state = initialState, action) {
  switch (action.type) {
    case footerConstants.LINK_GOTO_USER_CREATE:
      return {
        links: {
          ...state.links,
          goto_user_create: action.link
        }
      };
    case footerConstants.LINK_USER_CREATE:
      return {
        links: {
          ...state.links,
          user_create: action.link
        }
      };
    case footerConstants.LINKS_CLEAR:
      return {
        links: {
          goto_user_create: false,
          user_create: false
        }
      };
    default:
      return state
  }
}
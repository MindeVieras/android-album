
import { footerConstants } from '../_constants';

export const footerActions = {
    linkGoToUserCreate,
    linkUserCreate,
    linksClear
};

function linkGoToUserCreate(link) {
  return { type: footerConstants.LINK_GOTO_USER_CREATE, link };
}
function linkUserCreate(link) {
  return { type: footerConstants.LINK_USER_CREATE, link };
}

function linksClear() {
    return { type: footerConstants.LINKS_CLEAR };
}

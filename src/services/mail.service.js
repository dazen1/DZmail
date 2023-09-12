import { storageService } from "./async-storage.service.js";
import { utilService } from "./util.service.js";

export const mailService = {
  query,
  save,
  remove,
  getById,
  createMail,
};

const STORAGE_KEY = "mails";
const loggedinUser = { email: "DZ_dev@DZmail.com", fullname: "Dazen ipsun" };
const defaultMail = {
  id: "e101",
  subject: "Miss you!",
  body: "Would love to catch up sometimes",
  isRead: false,
  isStarred: false,
  sentAt: 1551133930594,
  removedAt: null, //for later use
  from: "momo@momo.com",
  to: "user@appsus.com",
};
_createMails();

async function query(filterBy) {
  console.log(filterBy);
  let mails = await storageService.query(STORAGE_KEY);
  if (filterBy.textSearch) {
    console.log(filterBy.textSearch);
  }
  var { isRead } = filterBy;
  if (isRead !== null) {
    console.log(isRead);
    mails = mails.filter((mail) => mail.isRead === isRead);
  }

  console.log(mails);
  return mails;
}

function getById(id) {
  return storageService.get(STORAGE_KEY, id);
}

function remove(id) {
  return storageService.remove(STORAGE_KEY, id);
}

function save(mailToSave) {
  if (mailToSave.id) {
    return storageService.put(STORAGE_KEY, mailToSave);
  } else {
    mailToSave.isOn = false;
    return storageService.post(STORAGE_KEY, mailToSave);
  }
}

function createMail(
  id = "e99",
  subject = "Miss you!",
  body = "Would love to catch up sometimes. balabs dlsd dbjssja lska nsal ak!",
  isRead = false,
  isStarred = false,
  sentAt = 1551133930594,
  removedAt = null,
  from = "momo@momo.com",
  to = "user@appsus.com"
) {
  // isRead =!isRead
  return {
    id,
    subject,
    body,
    isRead,
    isStarred,
    sentAt,
    removedAt,
    from,
    to,
  };
}

function _createMails() {
  let mails = utilService.loadFromStorage(STORAGE_KEY);
  if (!mails || !mails.length) {
    mails = [];
    for (let i = 1; i < 10; i++) {
      mails.push(createMail(`e10${i}`));
    }
    utilService.saveToStorage(STORAGE_KEY, mails);
  }
}

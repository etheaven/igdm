const electron = require('electron');
const { Menu, MenuItem } = electron.remote;
const ipcRenderer = electron.ipcRenderer;
const DUMMY_CHAT_ID = 'fake id';
const MSG_INPUT_SELECTOR = '.new-message form textarea';
const CHAT_WINDOW_SELECTOR = '.chat .messages';
const CHAT_TITLE_SELECTOR = '.chat .chat-title';
const URL_REGEX = new RegExp(/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/, 'i');

window.chats = [];
window.chatListHash = {};
window.chatCache = {};
window.unreadChats = {};
window.chat = {};
window.chatUsers = {};
window.currentChatId = null;
window.messageInQueue = {};
window.notifiedChatId = null;
window.loggedInUserId = null;
window.loggedInUser = null;
window.shouldSendSeenFlags = false;
window.isWindowFocused = true;
window.shouldNotify = false;
window.olderMessages = {};
window.gettingOlderMessages = false;
window.olderMessagesChatId = null;

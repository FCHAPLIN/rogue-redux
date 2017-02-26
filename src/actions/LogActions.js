export const LOG_ENTRY = 'LOG_ENTRY';

export const logEntryAction = (text, type) => {
    return {
        type: LOG_ENTRY,
        payload : {
            type,
            text
        }
    }
}
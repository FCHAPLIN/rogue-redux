export const LOG_ENTRY = 'LOG_ENTRY';

export const logEntryAction = (text, type= 'info') => {
    return {
        type: LOG_ENTRY,
        payload : {
            type,
            text
        }
    }
}
class Utils{
    static randomize(min, max) {
        return Math.floor((max - min + 1) * Math.random() + min);
    }
}

export default Utils;

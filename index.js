/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
    var string;
    var lowerCaseHashtags = [];
    for (var i = 0; i < hashtags.length; i++){
        var hashtag = hashtags[i].toLowerCase();
        lowerCaseHashtags[i] = hashtags[i].toLowerCase();
    }
    for (i = 0; i < lowerCaseHashtags.length; i++){
        hashtag = lowerCaseHashtags[i];
        if (lowerCaseHashtags.indexOf(hashtag) != lowerCaseHashtags.lastIndexOf(hashtag)) 
            lowerCaseHashtags.splice(lowerCaseHashtags.lastIndexOf(hashtag), 1);
    }
    string = lowerCaseHashtags.join(', ');
    return string;
};

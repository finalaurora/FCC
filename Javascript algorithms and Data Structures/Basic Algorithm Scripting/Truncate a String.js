function truncateString(str, num) {
    // Clear out that junk in your trunk
    if (str.length > num) {
        return str.substring(0, num).concat('...');
    } else
        return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
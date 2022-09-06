var options = { year: 'numeric', month: 'short', day: 'numeric' };

export const formatDate =(date)=>{
    return new Date(date).toLocaleDateString("en-US", options)
}

export const formatNumber =(number)=>{
    return  Intl.NumberFormat().format(number, "en-US");

}

export const formatNumberCompact = (number)=>{
    return Intl.NumberFormat('en', { notation: 'compact' }).format(number)
}

export const timeSince = (date)=>{
        date = new Date(date);
        var seconds = Math.floor((new Date() - date) / 1000);
      
        var interval = seconds / 31536000;
      
        if (interval > 1) {
          return Math.floor(interval) + " years ago";
        }
        interval = seconds / 2592000;
        if (interval > 1) {
          return Math.floor(interval) + " monthsm ago";
        }
        interval = seconds / 86400;
        if (interval > 1) {
          return Math.floor(interval) + " days ago";
        }
        interval = seconds / 3600;
        if (interval > 1) {
          return Math.floor(interval) + " hours ago";
        }
        interval = seconds / 60;
        if (interval > 1) {
          return Math.floor(interval) + " minutes ago";
        }
        return Math.floor(seconds) + " seconds ago";
}
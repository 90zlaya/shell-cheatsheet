# youtube-dl
> Download videos from YouTube

Read more about [youtube-dl](https://youtube-dl.org/).

## Table of Contents

* [Misc](#misc)

[↩ back to list of cheatsheets](README.md#list-of-cheatsheets)

## Misc

```bash
# Download using cURL (install or update) and set permissions
sudo curl -L https://yt-dl.org/downloads/latest/youtube-dl -o /usr/local/bin/youtube-dl
sudo chmod a+rx /usr/local/bin/youtube-dl

# Show version
youtube-dl --version

# Download playlist in mp3 format
youtube-dl -x --audio-format mp3 <playlist-url>
```

[⬆ back to top](#table-of-contents)

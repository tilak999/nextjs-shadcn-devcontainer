export default function TweetBlock() {
    return (
        <iframe
        
            srcDoc={`
            <blockquote class="twitter-tweet" data-dnt="true" data-theme="dark">
                <p lang="en" dir="ltr">
                    420 is ten times better than 42
                </p>
                &mdash; Elon Musk (@elonmusk)
                <a href="https://twitter.com/elonmusk/status/1324595039742222337?ref_src=twsrc%5Etfw">
                    November 6, 2020
                </a>
            </blockquote>
            <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            <blockquote class="twitter-tweet" data-dnt="true" data-theme="dark">
                <p lang="en" dir="ltr">
                    420 is ten times better than 42
                </p>
                &mdash; Elon Musk (@elonmusk)
                <a href="https://twitter.com/elonmusk/status/1324595039742222337?ref_src=twsrc%5Etfw">
                    November 6, 2020
                </a>
            </blockquote>
            <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`}
        />
    )
}

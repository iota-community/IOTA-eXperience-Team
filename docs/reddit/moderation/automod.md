# automod configuration set at: https://www.reddit.com/r/iota/wiki/config/automoderator

#### Sorting daily thread by new ####
author: AutoModerator
set_suggested_sort: new
type: submission  

##### TROLLING #######
---
# GENERAL - Post filter
    type: submission
    title+body (includes-word): ['shitcoin', 'faggot', 'scamcoin', 'clit', 'akhbar', 'allah', 'allahu', 'pussy', 'penis', 'idiota', 'genocide', 'refugee', 'iotard']
    author:
        is_contributor: false
        is_moderator: false
    action: filter
    action_reason: Possible trolling or inappropriate behavior - ({{match}})
    comment: "Hi, your post has been flagged as inappropriate and/or trollish, and has been automatically removed. **If this is not the case then your post will be approved in a timely manner by the mods.**"
---
# GENERAL - Comment filter
    title+body (includes-word): ['shitcoin', 'faggot', 'scamcoin', 'clit', 'akhbar', 'allah', 'allahu', 'pussy', 'penis', 'idiota', 'genocide', 'refugee', 'fuck', 'iotard', 'airdrop']
    author:
        is_contributor: false
        is_moderator: false
    action: filter
    action_reason: Possible trolling or inappropriate behavior - ({{match}})
---
# MODERATION RELATED - Post filter
    type: submission
    title+body (includes): ['megaiota', 'r/megaIOTA']

    author:
        is_contributor: false
        is_moderator: false
    action: filter
    action_reason: Possible trolling about moderation - ({{match}})
    comment: "Hi, your post has been flagged as possible spam and has been automatically removed. **If this is not the case then your post will be approved in a timely manner by the mods.**"
---
# MODERATION RELATED - Comment filter
    title+body (includes): ['megaiota', 'r/megaIOTA']

    author:
        is_contributor: false
        is_moderator: false
    action: filter
    action_reason: Possible trolling about moderation - ({{match}})
---
# SCAM RELATED - filter
    title+body (includes): ['sdhhr']
    author:
        is_contributor: false
        is_moderator: false
    action: filter
    action_reason: Possible scam using IOTA - ({{match}})
---
# Pending transaction - Filter    
#    type: submission
#    title+body (includes): ['pending', 'pend', 'reattach', 'reattachment', 'promoting', 'promote', 'confirm']
#    author:
#        is_contributor: false
#        is_moderator: false
#    comment: "Hi, are you having an issue with a transaction pending for an unusually long time? If so, please see [this post](https://www.reddit.com/r/Iota/comments/7ol7hi/psa_what_can_i_do_with_transaction_balance_or/?st=jcatibnd&sh=e5eaced3). If you continue to have issues, please visit [helloiota](https://forum.helloiota.com/Technology/Help) or /r/IOTAsupport with your tx hash and they will help you push it through." 
---

# Connection Refused - Filter    
#    type: submission
#    title+body (includes): ['connection', 'no connection', 'connection refused', 'refused', 'invalid response', 'invalid']
#    author:
#        is_contributor: false
#        is_moderator: false
#    comment: "Hi, are you getting a connection refused or invalid response error? It is likely due to being connected to an unsynced node. Please check the sidebar for a list of healthy nodes to try, and visit [helloiota](https://forum.helloiota.com/Technology/Help) or /r/IOTAsupport if you continue to have issues." 
---

# Reclaim Issues - Filter    
    type: submission
    title+body (includes-word): ['reclaim', 'reclaim process', 'kyc']
    author:
        is_contributor: false
        is_moderator: false
    comment: "Hi, is your post about Reclaims? Please refer to [this page](https://github.com/iota-community/IOTA-Discord/blob/main/help/iota-recovery-tips.md) for further information." 
---

# Node Issues - Filter    
    type: submission
    title+body (includes): ['balance', 'balance is 0', 'no balance', '0 balance', 'disappeared', 'disappear', 'recovering', 'recover', 'empty', 'emptied', 'history', 'missing iota', 'iota missing', 'iota is missing', 'iota is gone', 'iota gone', 'funds gone', 'funds are gone', 'lost iota', 'get iota back', 'light wallet', 'find my iota', 'character seed', 'find in wallet']
    author:
        is_contributor: false
        is_moderator: false
    comment: "Hi, are you having issues with an incorrect balance? Make sure you are using the latest version of the [Trinity wallet](https://trinity.iota.org/) we recommend you to download that first and see if that solves the issue. If balance isn't found by trinity automatically, try using the Trinity & snapshot transition function.

Furthermore have a look at [this page](https://github.com/iota-community/IOTA-Discord/blob/main/help/iota-recovery-tips.md) to look at different tips on how to recover your tokens.

For questions or support please visit the [IOTA Discord server](https://discord.iota.org) and get support from community members in the #help channel." 

---
# Stolen IOTA - Filter    
#    type: submission
#    title+body (includes): ['stolen', 'steal', 'hack', 'hacked', 'lost', 'theft', 'thief', 'theif']
#    author:
#        is_contributor: false
#        is_moderator: false
#    comment: "Hi, do you believe your IOTA has been stolen? If so, you likely used a malicious online seed generator to generate your seed. If the #stolen transaction is still pending (it'll say 'Pending' underneath the transaction in your wallet history), URGENTLY send your entire balance to an #address in a different seed. Check [here](https://forum.helloiota.com/9100/To-everyone-posting-with-stolen-balances) for more details. If the stolen #transaction is confirmed, then unfortunately there is nothing that can be done. Please join [this discussion](https://forum.helloiota.com/9284/Call-#to-action-lets-catch-the-thief?PageIndex=1) if this applies to you."

#---
##### r/IOTAmarkets stuff #######
---
# PRICE RELATED - Post filter
    type: submission
    title+body (includes): ['lambo', 'lambos', 'moon', 'bull', 'bear', 'rocket', 'invest', 'portfolio', 'moon', 'market cap', 'marketcap', 'market-cap', '1usd', '1 usd', '$1', 'dollar', '1$', 'bullish', 'bearish', 'price', 'tanking', 'dumping', 'crashing', 'HMuYfScGpbE', 'liquidating', 'rich', 'dip', 'technical analysis', 'falling', 'crash', 'correction', 'upswing', 'time to buy', 'time to sell', 'downswing', '1 dollar', '7th place', 'decline', '20%', '15%', '10%', 'drop', 'hodl', 'downtrend', 'uptrend', 'dump', 'binance', 'bitfinex']
    author:
        is_contributor: false
    action: filter
    action_reason: Possible offtopic r/IOTAmarkets post - ({{match}})
    comment: "Hi, your post seems to be price/market oriented. As such, this post has been automatically removed, and we ask that you submit this to /r/IOTAmarkets instead for price related discussions. **If this is not the case then your post will be approved in a timely manner by the mods.**"

---
# PRICE RELATED - Comment filter
#    title+body (includes): ['lambo', 'lambos', 'moon', 'bull', 'bear', 'rocket', 'invest', 'portfolio', 'moon', 'market cap', 'marketcap', 'market-#cap', '1usd', '1 usd', '$1', 'dollar', '1$', 'bullish', 'bearish', 'price', 'tanking', 'dumping', 'crashing', 'HMuYfScGpbE', 'liquidating', #'rich', 'dip', 'technical analysis', 'falling', 'crash', 'correction', 'upswing', 'time to buy', 'time to sell', 'downswing', '1 dollar', '7th #place', 'decline', '20%', '15%', '10%', 'drop']
#    author:
#        is_contributor: false
#    action: filter
#    action_reason: Possible offtopic r/IOTAmarkets post
---
author: AutoModerator
set_suggested_sort: new
type: submission  

##### SPAMMING #######
---
# SOFT URL BANS - Post filter
    type: submission
    url+title+body (includes): ['coinstarter', 'trollbox', 'bitify', 'trade-block', 'tradeblock', 'coinpump', 'wcx', 'airdrop', 'r/megaiota', 'freebitco.in', 'beyondblocks.gitbooks.io', 'davor', 'gazuah', 'coincheckup', 'malware.com', 'iotaseed.io', 'iotaseedgenerator.com', 'get-random', 'powershell', 'iotaseedgenerator.org', 'iota-help', 'iotaseedgenerator', 'seed.iota-foundation.org', 'factsaboutiota.wordpress.com', 'factsaboutiota', 'linkedin.com/feed/update', 'oodles', 'genxbtc']
    author:
        #combined_karma: "< 50"
        is_contributor: false
        is_moderator: false
    action: filter
    action_reason: Soft URL ban - {{match}}
    moderators_exempt: false
    comment: "Hi, your post has been flagged as possible spam and has been automatically removed. **If this is not the case then your post will be approved in a timely manner by the mods.**"
---
# SOFT URL BANS - Comment filter
    url+title+body (includes): ['coinstarter', 'trollbox', 'bitify', 'trade-block', 'tradeblock', 'coinpump', 'wcx', 'airdrop', 'r/megaiota', 'freebitco.in', 'beyondblocks.gitbooks.io', 'davor', 'gazuah', 'coincheckup', 'malware.com', 'iotaseed.io', 'iotaseedgenerator.com', 'get-random', 'powershell', 'iotaseedgenerator.org', 'iota-help', 'iotaseedgenerator', 'seed.iota-foundation.org', 'twitter.com/iotatokennews', 'rplg.co', 'genxbtc.eu']
    author:
        #combined_karma: "< 50"
        is_contributor: false
        is_moderator: false
    action: filter
    action_reason: Soft URL ban - {{match}}
    moderators_exempt: false
---
# HARD URL BANS - remove
    type: submission
    body+title+url (includes): ['8sudf89s']
    author:
        #is_contributor: false
        #is_moderator: false
    action: remove
    action_reason: Hard URL ban - submission - ({{match}})
    set_flair: "spam"
    set_locked: true
---
# SPAM BOTS
    title+body (includes): ['tipjar']
    author:
        is_contributor: false
        is_moderator: false
    action: filter
    action_reason: Bot spam - ({{match}})
---
# GENERAL SPAMMING - Post filter
    type: submission
    title+body (includes): ['pump group', 'byteball', 'byte ball', 'byte-ball', 'friendzone', 'cummies', 'DisLedger', 'disledger', 'exxor', 'exor', 'cryptex', 'gbyte', 'hashgraph', 'hash graph', 'ethconnect', 'powr', 'streamr', 'cardano', 'Quantstamp', 'raiblocks', 'raiblock', 'railblock', 'railblocks', 'xrb', 'iot chain', 'iotchain', 'xrp', 'ripple', 'keychain', 'icx', 'vechain', 'tron', 'eos', 'Biztranex']
    author:
        is_contributor: false
        is_moderator: false
    action: filter
    action_reason: Possible spam - ({{match}})
    comment: "Hi, your post has been flagged as possible spam and has been automatically removed. **If this is not the case then your post will be approved in a timely manner by the mods.**"
---
    type: submission
    title+body (includes-word): ['itc', 'cult', 'cultish', 'ven', 'iota (miota)', 'ucl', 'iota [miota]', 'icon', 'iota(miota)', 'iota[miota]', 'sirin', 'overhaul']
    author:
        is_contributor: false
        is_moderator: false
    action: filter
    action_reason: Possible spam - ({{match}})
#    comment: "Hi, your post has been flagged as possible spam and has been automatically removed. **If this is not the case then your post will be #approved in a timely manner by the mods.**"
---
    type: submission
    title+body (includes-word): ['Total Supply & System of Units', 'nobleant.io', 'nobleant', 'NPT', 'abakus', 'airdrop', 'nova', '[bounty]', 'anubhav.singh', 'How IOTA is Reimagining the Blockchain for the Internet of Things', 'vertex', 'encrybit', 'Top Features of IOTA to Expedite Blockchain and IoT Adoption', 'How IOTA is Reimagining the Blockchain for the Internet of Things', 'Top 5 Technological Advantages Of IOTA For Industries', 'crypto gambling platform', 'cryptoroulette']
    author:
        is_contributor: false
        is_moderator: false
    action: remove
    action_reason: ICO scam spam or karma farming - ({{match}})
---
# GENERAL SPAMMING - Comment filter
#    title+body (includes): ['pump group', 'byteball', 'byte ball', 'byte-ball', 'friendzone', 'cummies', 'DisLedger', 'disledger', 'exxor', 'exor', #'cryptex', 'gbyte', 'hashgraph', 'hash graph', 'ethconnect', 'powr', 'streamr', 'cardano', 'Quantstamp', 'raiblocks', 'railblocks', 'xrb', 'iot #chain', 'iotchain', 'keychain', 'icx', 'icon', 'vechain', 'xrp', 'ripple']
#    author:
#        is_contributor: false
#        is_moderator: false
#    action: filter
#    action_reason: Possible spam - ({{match}})
---
    title+body (includes-word): ['itc', 'cult', 'cultish', 'ven', 'ripple', 'xrp', 'xrb', 'idap', 'neo', 'immo', 'elyqd', 'credits', 'airdrop', 'air drop', 'pwnie']
    author:
        is_contributor: false
        is_moderator: false
    action: filter
    action_reason: Possible spam - ({{match}})
---

##### Spam / MALWARE #######
---
# SOFT URL BANS - Post filter
    type: submission
    url+title+body (includes): ['iota-news.com', 'discord.gg']
    author:
        #combined_karma: "< 50"
        is_contributor: false
        is_moderator: false
    action: filter
    action_reason: Soft URL ban - {{match}}
    #moderators_exempt: false
    #comment: "Hi, your post contains a banned URL and as such, has been automatically removed. **If this is not the case, then your post will be #approved in a timely manner by the mods.**"
---
# SOFT URL BANS - Post filter
    url+title+body (includes): ['shitcoin.com', 'seed.iota-foundation.org', 'iota-support.com']
    author:
        #combined_karma: "< 50"
        #is_contributor: false
        is_moderator: false    
    action: filter
    action_reason: Soft URL ban - {{match}}
  #  message: "Hi, your post contains a banned URL and as such, has been automatically removed. If this is not the case then your post will be #approved in a timely manner by the mods."
---
# HARD URL BANS - remove
    type: submission
    body+title+url (includes): ['etherchart.net', 'paritycore.com', 'tradeblock.net', 'genxbitco.eu', 'coinfi.com', 'cryptoatomicwallet.com', 'atomcwallet', 'Coinwhalenews', 'cryptobriefing', 'zerocrypted', 'coinlearningclub', 'todaysgazette', 'cryptotown', 'investinblockchain', 'coinwhalenews', 'thecoinrepublic', 'Cryptocurrencynews', 'cryptoease', 'cryptoknowmics', 'intellectyx', 'elevenews', 'publish0x', 'analyticsinsight', 'coinjoy', 'cryptocrunchapp']
    author:
        #is_contributor: false
        #is_moderator: false
    action: remove
    action_reason: Hard URL ban - ({{match}})
    set_flair: "malware"
    set_locked: true
---



##### FLAIRS #######
---
    # remove flair if karma is non-zero
    author:
        ~flair_css_class (includes): ['foundation', 'bosch']
        link_karma: '> 1' # if user has more than 1 link karma
        comment_karma:  '> 0' # OR user has more than 0 comment karma
        satisfy_any_threshold: true # signifies OR
        set_flair: ["", ""] # then remove flair.
        overwrite_flair: true
---
    # These rules assign flair based on account age.
    author:
        ~flair_css_class (includes): ['foundation', 'bosch']
        account_age: '< 30' # if user is less than 30 days old
        set_flair: ["redditor for < 1 month", "month"] # assign month flair
        overwrite_flair: true
#    action: filter
#    action_reason: Account is less than 1 month old, check for trolling.
---
    author:
        ~flair_css_class (includes): ['foundation', 'bosch']
        account_age: '< 7' # if user is less than 7 days old
        set_flair: ["redditor for < 1 week", "week"] # assign week flair
        overwrite_flair: true
#    action: filter
#    action_reason: Account is less than 7 days old, check for trolling.
---
    author:
        ~flair_css_class (includes): ['foundation', 'bosch']
        account_age: '< 1' # if user is less than 1 day old, then
        set_flair: ["redditor for < 1 day", "day"] # assign day flair
        overwrite_flair: true
        is_contributor: false
    action: filter
    action_reason: Account is less than 1 day old - check for spam, etc.
---
    author:
        ~flair_css_class (includes): ['foundation', 'bosch']
        account_age: '< 1 hours' # if user is less than 1 hour old, then
        set_flair: ["redditor for < 1 hour", "hour"] # assign hour flair
        overwrite_flair: true
        is_contributor: false
    action: filter
    action_reason: Account is less than 1 hour old - check for spam, etc.
---
    # assign flair if karma is negative
    author:
        ~flair_css_class (includes): ['foundation', 'bosch']
        link_karma: '< 1' # if user has less than 1 link karma
        comment_karma:  '< 0' # OR if user has less than 0 comment karma
        satisfy_any_threshold: true # signifies OR, then
        set_flair: ["redditor with negative karma", "negative karma"] # assign negative karma flair.
        overwrite_flair: true
#    action: filter
#    action_reason: Account has negative karma, check for trolling.
---
#    author:
#        account_age: '> 7' # if user is older than 7 days
#        set_flair: ["",""] # then remove flair.
#        overwrite_flair: true
---
#    author:
#        account_age: '< 90' # if user is less than 90 days old
#        set_flair: ["< 3 months", "3 month"] # assign month flair
#        overwrite_flair: true
---
    # assign flair if account is old, yet karma is unusually low.
#    author:
#        account_age: '> 365' # if user is more than 1 year old
#        comment_karma:  '< 100' # and, if user has less than 100 comment karma, then
#        set_flair: ["redditor for > 1 year with low karma", "low karma"] # assign old age low karma flair.
#        overwrite_flair: true
#    action: filter
#    action_reason: Account is older, but has low karma; check for trolling.
---
    # assign flair if karma is non-zero
#    author:
#        link_karma: '1' # if user has exactly 1 link karma
#        comment_karma: '0' # AND if user has exactly 0 link karma
#        set_flair: ["0", "default karma"] # assign default karma flair
#        overwrite_flair: true
#    action: filter
#    action_reason: Account has default karma
---

#### USER FILTER ####

    author:
        name: ['Shatteredcopper', 'bitcoinartist', 'SatoriNakamoto', 'animalmanwrites', 'eflatmajor7', 'RDNtrader', 'Leaders17', '3D_Print_N49', 'UltimateCryptoTrader', 'lighterCarrier', 'xanaxolotl', 'Haramburglar', 'tr_m', 'YourFriendlyIOTABOT', 'Haramburglar', 'jcfig2612', 'TheNightsWallet', 'TouchinKids', 'TheCryptoDivision', 'thedevilscompiler', 'pmoneycrypto', 'TrapDoorFabrizio', 'iotaadviser', 'iota_pending_state', 'OvetEdge', 'YoloSwag4Jesus420fgt']
    action: filter
    action_reason: "Possible troll/spammer - review"

---
    author:
        name: ['cryptodator', 'Cryptoknowledge', 'cryptonanymous', 'cryptoflasher', 'LilPump290', 'donksewer911', 'michaeljohn132', 'adamhillc', 'chadrampage88', 'Crypto_Daily', 'chrysotileman', 'throwawayforrandi', 'cryptoticknews', 'archeatsmysoul', 'COE-IoT', 'all_the_keks', 'Gridorr', '74776174', 'jorge', 'TookTheRedPillouch', 'uffno', 'cryptocalbot', 'tradezy', 'b33pb00pb33p', 'mraindeer', 'samito09', '5boros', 'TheQuantumPhysicist', 'ifisch', 'phreak-e', 'zaskquatch', 'xtrollingx', 'ArrayBoy', 'TheyareWHITENOTCOLOR', 'TheyreWHITENOTCOLOR', 'totesmessenger', 'maurinohose', 'carolinepatrick900', 'hooplajokes', 'codejammer27', 'playbrook27', 'Zack_amir', 'HODLTID', '0xf3e', 'grumpyfrench', '_Questions_Answers_', 'newprofile15', 'luizcrf', 'TheQuantumPhysicist']
    action: remove
    action_reason: "Bot/troll"

---

###### Section 17G - Removes all standard Reddit links and asks for NP (no-participation) links
    priority: 5000
    url+body (regex): ['(\w{2}.)?(?<!np.)reddit.com/r/(?!IOTA)\w+', '(?<!com)/r/(?!IOTA)\w+/comments']
    action: remove
    action_reason: "Section 17G - Remove all standard Reddit links and informs OP to use NP links instead."
    message: |
        Your {{kind}} has been automatically removed because you linked to a thread outside /r/{{subreddit}} without using the NP subdomain for no-participation mode. When posting a link to a different subreddit, please change the subdomain from https://www.reddit.com/ to https://np.reddit.com/. This simple change substantially reduces [brigading](https://www.reddithelp.com/en/categories/rules-reporting/account-and-community-restrictions/what-constitutes-vote-cheating-or).
    moderators_exempt: true

---

```bash
### Removes disguised links
#    body (regex): "(\\[(?P<text>(http|www)\\S+)\\]\\((?!(?P=text))(http|www)\\S+\\))"
#    action: remove
#    modmail: The above {{kind}} by /u/{{author}} was removed because it contained a disguised link. Please investigate immediately.

```
---

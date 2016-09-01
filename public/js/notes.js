rails new raffleServer -d postgresql


rails g scaffold user firstname lastname phone email entries

rails g scaffold winner firstname lastname email


[winner]  *confused* [model-name] = winner [tablename1] = firstname [tablename2] =  lastname [tablename3] = email



sudo -u postgres createuser --superuser jamescarter


skip_before_filter  :verify_authenticity_token

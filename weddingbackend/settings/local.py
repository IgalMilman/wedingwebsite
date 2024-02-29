# Make this unique, and don't share it with anybody.

import os
import sys
from os.path import join, dirname
from weddingbackend.settings.config import BASE_DIR

AUTO_LOGOUT_DELAY = 3600 # Default logout delay

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, '../db.sqlite3'),
    }
}

try:
    print(BASE_DIR)
    exec(open(join(dirname(BASE_DIR), 'private', 'django-sensitive-data.cnf')).read())
except:
    print("Error with LOCAL_EXTRA_SETTINGS")
    print(join(dirname(BASE_DIR), 'private', 'django-sensitive-data.cnf'))
    sys.exit(1)

SESSION_COOKIE_AGE = AUTO_LOGOUT_DELAY * 60
STATIC_ROOT = join(dirname(dirname(BASE_DIR)), 'static')

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
        'OPTIONS': {
            'min_length': 6,
        }
    },
]

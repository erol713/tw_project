from flask import Flask, abort, render_template, url_for, redirect, request, jsonify, Response

import os
from twilio.rest import Client
from dotenv import load_dotenv
load_dotenv()
from utils import user_data

if request.method == 'POST':
    number = request.form['to']
    message_body = request.form['txt_body']
    user = user_data()

    message = user.messages \
        .create(
            body= message_body,
            status_callback='http://f8dfea27b4cc.ngrok.io/update_status',
            from_='+18317774783',
            to=number
            )
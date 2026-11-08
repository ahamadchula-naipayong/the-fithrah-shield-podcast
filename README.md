# The Fithrah Shield Podcast ðŸŽ™ï¸

Castopod (v1.15.6) podcast hosting platform for **The Fithrah Shield Podcast**.

Powered by [Castopod](https://castopod.org) - Open-source, ActivityPub / Fediverse & Podcasting 2.0 compatible.

## Deployment on VPS (Hostinger)

### 1. Clone repository
```bash
git clone https://github.com/ahamadchula-naipayong/the-fithrah-shield-podcast.git /var/www/castopod
cd /var/www/castopod
```

### 2. Set Permissions
```bash
sudo chown -R www-data:www-data /var/www/castopod
sudo chmod -R 775 /var/www/castopod/writable /var/www/castopod/public/media
```

### 3. Nginx Document Root
Point your Nginx `root` directive to:
`/var/www/castopod/public`

### 4. Install & Setup
Navigate in your web browser to:
```text
https://yourdomain.com/cp-install
```

### 5. Setup Background Cron Job
```bash
sudo crontab -e -u www-data
```
Add:
```bash
* * * * * php /var/www/castopod/spark cron:run >> /dev/null 2>&1
```
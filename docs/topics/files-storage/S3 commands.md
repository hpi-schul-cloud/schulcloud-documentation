# S3 commands

Please find below a set of commands in order to configure, check, and upload a file to an S3 bucket from the command line :

```
# configure AWS
aws configure
AWS Access Key ID [None]: <S3_ACCESS_KEY>
AWS Secret Access Key [None]: <S3_SECRET_KEY>
Default region name [None]: <S3_REGION>
Default output format [None]:

# check S3 bucket for availability of file
aws s3 ls s3://<S3_BUCKET_NAME> --endpoint-url <S3_ENDPOINT_URL> --recursive --human-readable --summarize | grep xlsx | grep sonne
2023-05-05 16:54:00    9.4 KiB medienlbdvd_bio_genetischer_code_sonne/medienlbdvd_bio_genetischer_code_sonne.xlsx

# upload file to S3 bucket
aws s3 cp medienlbdvd_bio_genetischer_code_sonne.xlsx s3://<S3_BUCKET_NAME>/medienlbdvd_bio_genetischer_code_sonne/medienlbdvd_bio_genetischer_code_sonne.xlsx --endpoint-url <S3_ENDPOINT_URL>
upload: ./medienlbdvd_bio_genetischer_code_sonne.xlsx to s3://<S3_BUCKET_NAME>/medienlbdvd_bio_genetischer_code_sonne/medienlbdvd_bio_genetischer_code_sonne.xlsx

# re-check S3 bucket
aws s3 ls s3://<S3_BUCKET_NAME> --endpoint-url <S3_ENDPOINT_URL> --recursive --human-readable --summarize | grep xlsx | grep sonne
2025-02-27 13:30:57    9.5 KiB medienlbdvd_bio_genetischer_code_sonne/medienlbdvd_bio_genetischer_code_sonne.xlsx
```